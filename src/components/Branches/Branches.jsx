import React, { useContext, useState } from "react";
import { apiContext } from "../context/apiContext";
import './Branches.css';
import { useLanguage } from "../context/LangContext";

const Branches = () => {
  const { lang } = useLanguage();
  const { branches } = useContext(apiContext);
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const currentBranch = branches.find((branch) =>
    lang === "ar" ? branch.nameAR === selectedBranch : branch.nameEN === selectedBranch
  );

  return (
    <div className="Branches" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="title">{lang === 'ar' ? 'فروعنا' : 'Our Branches'}</h2>

      <select
        className="branch-select"
        onChange={handleChange}
        value={selectedBranch}
      >
        <option value="">
          {lang === 'ar' ? 'اختر الفرع' : 'Select a Branch'}
        </option>

        {branches?.length > 0 &&
          branches.map((branch, index) => (
            <option
              key={index}
              value={lang === 'ar' ? branch.nameAR : branch.nameEN}
            >
              {lang === 'ar' ? branch.nameAR : branch.nameEN}
            </option>
          ))}
      </select>

      {currentBranch && (
        <div className="branch-details">
          <h3>{lang === 'ar' ? currentBranch.nameAR : currentBranch.nameEN}</h3>
          <p>
            <strong>{lang === 'ar' ? 'العنوان:' : 'Address:'}</strong>{" "}
            {lang === 'ar' ? currentBranch.addressAR : currentBranch.addressEN}
          </p>
          <p>
            <strong>{lang === 'ar' ? 'الهاتف:' : 'Phone:'}</strong>{" "}
            {currentBranch.phone}
          </p>
          <p>
            <strong>{lang === 'ar' ? 'ساعات العمل:' : 'Working Hours:'}</strong>{" "}
            {lang === 'ar' ? currentBranch.workingHoursAR : currentBranch.workingHoursEN}
          </p>
        </div>
      )}
    </div>
  );
};

export default Branches;
