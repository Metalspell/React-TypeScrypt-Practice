import React from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/PostList/PostList';
import SelectedPost from './components/SelectedPost/SelectedPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {

  return (
    <div className="main-wrapper">
      <PostList />
      <Pagination />
    </div>
  );
}

export default App;
