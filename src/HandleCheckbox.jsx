import React, { useState } from 'react';

function Check() {
  const [skills, setSkills] = useState([]); // Shuru me khali array

  const handleSkills = (e) => {
    const value = e.target.id;       // Checkbox ki value id se le rahe hain
    const checked = e.target.checked; // Checked hai ya nahi

    if (checked) {
      // Agar checked hai to add karo
      setSkills([...skills, value]);
    } else {
      // Agar uncheck kiya to hata do
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <>
      <h2>Select Your Skills</h2>

      <input onChange={handleSkills} type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="react" />
      <label htmlFor="react">React</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="java" />
      <label htmlFor="java">Java</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="sql" />
      <label htmlFor="sql">SQL</label>
      <br /><br />

      <h1>Selected Skills: {skills.join(", ")}</h1>
    </>
  );
}

export default Check;
