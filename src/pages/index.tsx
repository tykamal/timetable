// import { useRouter } from 'next/router';
import { useState } from 'react';

import Exams from '../components/exams';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  // manage state for the text input
  const [keyword, setKeyword] = useState('all');
  return (
    <Main
      meta={
        <Meta
          title="Dar Es Salaam Independent School - DIS"
          description="Primary School Exam Timetable Nov 18 - 26, 2021."
        />
      }
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Type a keyword to search: 1s, 6h, art etc..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Exams searchfor={keyword} />
    </Main>
  );
};

export default Index;
