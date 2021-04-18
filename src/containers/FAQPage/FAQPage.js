import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

          <div>
            <h2> For utleier</h2>

            <h3>Question 1?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 2?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 3?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 4?</h3>
            <p>Answer: Lorem ipsum</p>
          </div>

           <div>
            <h2>For leier</h2>

            <h3>Question 1?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 2?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 3?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Question 4?</h3>
            <p>Answer: Lorem ipsum</p>
          </div>




        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
