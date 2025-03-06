//Double quote or single quote vs backtick for template literal
//Double quote or single quote for normal string, doesn't take multiple line and variable
//Backtick for template string, takes multiple line and variable with automatic line break
//Bactcik is used for showing other variable's value in the string using ${variableName}

// const anthem = "Amar Sonar Bangla
// Ami Tomay Bhalobashi"; // error

const anthem = `Amar Sonar Bangla 
Ami Tomay Bhalobashi`;
console.log(anthem);

const countryName = "Bangladesh";
const anthem2 = `Amar Sonar ${countryName}
Ami Tomay Bhalobashi`;
console.log(anthem2);
