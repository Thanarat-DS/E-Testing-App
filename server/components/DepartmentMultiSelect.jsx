import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const DepartmentMultiSelect = (props) => {
  const { record, onChange, property } = props;
  const [options, setOptions] = useState([]);
  const selectedValues = record.params[property.name] || [];

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch('/admin/api/resources/แผนก/actions/list');
      const json = await res.json();
      const values = json.records.map(r => ({
        label: r.params.name,
        value: parseInt(r.params.dept_id),
      }));
      setOptions(values);
    };

    fetchDepartments();
  }, []);

  const handleChange = (selected) => {
    const values = selected.map(option => option.value);
    onChange(property.name, values);
  };

  const handleSelectAll = () => {
    onChange(property.name, options.map(opt => opt.value));
  };

  return (
    <div>
      <button type="button" onClick={handleSelectAll} style={{ marginBottom: '5px' }}>
        เลือกทั้งหมด
      </button>
      <Select
        isMulti
        options={options}
        value={options.filter(opt => selectedValues?.includes(opt.value))}
        onChange={handleChange}
      />
    </div>
  );
};

export default DepartmentMultiSelect;
