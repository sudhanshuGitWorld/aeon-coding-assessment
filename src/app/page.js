'use client'
import Footer from './components/footer';

export default function Home() {

  return (
    <main>
      <div className='container'>
        <h1>Welcome page</h1>
        <h2>Follow the instructions to view AEON Coding Assessment</h2>
        <ol type='1'>
          <li>Click on next to see the task on next page</li>
          <li>Click on prev to come back on previous page</li>
          <li>Get all code in given github url in README.md file</li>
        </ol>
      </div>
      <Footer nextPagePath={'/calculator'} isNextBtnShow />
    </main>
  );
}
