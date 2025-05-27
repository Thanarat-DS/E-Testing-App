import React, { useEffect, useState } from 'react';
import { ApiClient } from 'adminjs'
import {
  Box,
  Button,
  Label,
  Select,
  Input,
  H2,
  H3,
} from '@adminjs/design-system';

const SITES = ['HQ', 'SK', 'ST'];
const api = new ApiClient()

const TopicConfig = () => {
  const [topics, setTopics] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [siteConfigs, setSiteConfigs] = useState({});

  useEffect(() => {
    // โหลด topic codes และ departments ผ่าน handler
    api.getPage({ pageName: 'topic-config' })
      .then(({ data }) => {
        setTopics(data.topicCodes || []);
        setDepartments(data.departments || []);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    // reset เมื่อเปลี่ยน topic
    const defaultConfigs = {};
    SITES.forEach(site => {
      defaultConfigs[site] = {
        type: 'All',
        time_limit: 60,
        dept_ids: [], // เฉพาะกรณี Partial
      };
    });
    setSiteConfigs(defaultConfigs);
  }, [selectedTopic]);

  const handleChange = (site, field, value) => {
    setSiteConfigs(prev => ({
      ...prev,
      [site]: {
        ...prev[site],
        [field]: value
      }
    }));
  };

  const handleSubmit = async () => {
    try {
      await api.callPage({
        pageName: 'topic-config',
        method: 'post',
        data: {
          topic_code: selectedTopic,
          config: siteConfigs,
        }
      });
      alert('Configuration saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to save configuration.');
    }
  };

  const getDepartmentsBySite = (site) => {
    return departments.filter(dep => dep.site === site);
  };

  return (
    <Box variant="grey" p="xl">
      <H2 mb="xl">Configure Topic by Site</H2>

      <Box mb="xl">
        <Label>Select Topic Code:</Label>
        <Select
          options={topics.map((t) => ({ value: t, label: t }))}
          value={selectedTopic ? { value: selectedTopic, label: selectedTopic } : null}
          onChange={(selected) => setSelectedTopic(selected?.value || '')}
          isClearable
        />
      </Box>

      {selectedTopic && SITES.map(site => (
        <Box key={site} variant="white" p="xl" mb="xl" border>
          <H3 mb="lg">{site}</H3>

          <Box mb="lg">
            <Label>Type:</Label>
            <Select
              options={[
                { value: 'All', label: 'All' },
                { value: 'Partial', label: 'Partial' },
              ]}
              value={{ value: siteConfigs[site]?.type, label: siteConfigs[site]?.type }}
              onChange={(selected) => handleChange(site, 'type', selected.value)}
            />
          </Box>

          {siteConfigs[site]?.type === 'Partial' && (
            <Box mb="lg">
              <Label>Departments:</Label>

              <Select
                isMulti
                closeMenuOnSelect={false}
                options={[
                  { value: '__ALL__', label: '📌 Select All' },
                  ...getDepartmentsBySite(site).map(dep => ({
                    value: dep.dept_id,
                    label: dep.dept_name,
                  }))
                ]}
                value={[
                  ...siteConfigs[site].dept_ids.map(id => {
                    const dep = departments.find(d => d.dept_id === id);
                    return dep ? { value: dep.dept_id, label: dep.dept_name } : null;
                  }).filter(Boolean)
                ]}
                onChange={(selectedOptions) => {
                  const selectedIds = selectedOptions
                    .filter(opt => opt.value !== '__ALL__')
                    .map(opt => opt.value);

                  const allDepIds = getDepartmentsBySite(site).map(dep => dep.dept_id);
                  const isAllSelected = allDepIds.every(id => selectedIds.includes(id));

                  const clickedSelectAll = selectedOptions.some(opt => opt.value === '__ALL__');

                  if (clickedSelectAll) {
                    if (isAllSelected) {
                      // ถ้าเลือกครบทุกอันแล้ว และคลิก Select All อีก = ยกเลิกทั้งหมด
                      handleChange(site, 'dept_ids', []);
                    } else {
                      // เลือกทั้งหมด
                      handleChange(site, 'dept_ids', allDepIds);
                    }
                  } else {
                    // เลือกแบบปกติ
                    handleChange(site, 'dept_ids', selectedIds);
                  }
                }}
              />
            </Box>
          )}


          <Box>
            <Label>Time Limit (minutes):</Label>
            <Input
              type="number"
              value={siteConfigs[site]?.time_limit}
              onChange={(e) =>
                handleChange(site, 'time_limit', parseInt(e.target.value) || 0)
              }
            />
          </Box>
        </Box>
      ))}

      <Button variant="primary" size="lg" onClick={handleSubmit}>
        Save Configuration
      </Button>
    </Box>

  );
};

export default TopicConfig;
