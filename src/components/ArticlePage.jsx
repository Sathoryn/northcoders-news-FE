import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ArticlePage() {
  const navigate = useNavigate();


  function goToHomepage() {
    navigate('/');
  }

  return (
    <>
      <p>hello</p>
      <button type="button" onClick={goToHomepage}>
        Back to Homepage
      </button>
    </>
  );
}
