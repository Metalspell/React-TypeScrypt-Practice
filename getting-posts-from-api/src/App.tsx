import React from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/PostList/PostList';

const App: React.FC = () => {

  return (
    <div className="main-wrapper">
      <PostList />
      <Pagination />
    </div>
  );
}

export default App;
