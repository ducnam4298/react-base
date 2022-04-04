// import React, { useContext } from 'react';
// import { Theme } from 'themes';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import styled from '@emotion/styled';

// const App = () => {
//   const { isLight } = useContext(Theme);
//   return (
//     <Router>
//       <Body style={{ background: isLight ? '' : '' }}>
//         <Routes>
//           <Route path="/signin" element={<h1>signin</h1>} />
//           <Route path="/signup" element={<h1>signup</h1>} />
//           <Route path="/forgot" element={<h1>forgot</h1>} />
//           <Route path="/" element={<h1>home</h1>} />
//           <Route path="/bill" element={<h1>bill</h1>} />
//           <Route path="/brand" element={<h1>brand</h1>} />
//           <Route path="/delivery" element={<h1>delivery</h1>} />
//           <Route path="/order" element={<h1>order</h1>} />
//           <Route path="/product" element={<h1>product</h1>} />
//           <Route path="/role" element={<h1>role</h1>} />
//           <Route path="/setting" element={<h1>setting</h1>} />
//           <Route path="/user" element={<h1>user</h1>} />
//           <Route path="/customer" element={<h1>customer</h1>} />
//         </Routes>
//       </Body>
//     </Router>
//   );
// };

// export default App;

// const Body = styled.div`
//   background-color: #1a1d23;
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

import Router from '../routes';
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import ScrollToTop from '../components/ScrollToTop';
import { BaseOptionChartStyle } from '../components/BaseOptionChart';

const App = () => {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle/>
      <Router />
    </ThemeConfig>
  );
};

export default App;
