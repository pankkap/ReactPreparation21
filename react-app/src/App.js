import ControlledApproach from "./Controlled vs Uncontrolled/ControlledApproach";
import UnControlledApproch from "./Controlled vs Uncontrolled/UnControlledApproch";

const App = () => {
  // return multiple elements in the form of array and using key attribute and, array elements separated by comma,

  return [
    <h1 key="key-1">Controlled Component Approch</h1>,
    <ControlledApproach key="key-2" />,
    <br key="key-3" />,
    <h1 key="key-4">Uncontrolled Component Approch</h1>,
    <UnControlledApproch key="key-5" />,
  ];
};

export default App;
