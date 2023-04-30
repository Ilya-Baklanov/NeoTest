import { useEffect, useState } from 'react';
import MainLayout from './components/main-layout/MainLayout';
import Card from './components/Card';

import s from './App.module.scss';

type Items = Array<{
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  type: string;
  counts: number;
}>

function App() {
  const [items, setItems] = useState<Items>([]);

  const getItems = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    setItems(data.itemsList)
  }

  useEffect(() => {
    getItems('/items');
  }, []);

  return (
    <>
      <MainLayout>
        <div className={s.cards_list}>
          {items?.map(item => (
            <Card title={item.title} />
          ))}
        </div>
      </MainLayout>
    </>
  )
}

export default App
