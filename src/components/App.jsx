import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Statistics/>
    </div>
  );
};
