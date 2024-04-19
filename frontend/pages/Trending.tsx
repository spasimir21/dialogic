import React, { useState, useRef, useEffect } from 'react';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';

export default function Trending() {
  const [topicInput, setTopicInput] = useState('');
  const inputDelaySec = 1;
  let timeout = useRef<any>();
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topicRequest = useRequest(requests.category.getTopCategories);

  const [avaibleTopics, setAvaibleTopics] = useState(topicRequest.result);

  function handleInput(event: any) {
    clearTimeout(timeout.current);
    setTopicInput(event.target.value);
    timeout.current = setTimeout(() => {
      topicRequest.send();
    }, inputDelaySec * 1000);
  }

  function isTopicAlreadySelected(topic: string) {
    for (let selectedTopic in selectedTopics) {
      if (selectedTopics[selectedTopic] === topic) {
        return false;
      }
    }

    return true;
  }

  function handleSelectTopic(topic: string) {
    setSelectedTopics((prevSelTopics: any) => {
      let updatedSelTopics = [...prevSelTopics];
      updatedSelTopics.push(topic);
      return updatedSelTopics;
    });
  }

  useEffect(() => {
    topicRequest.send();
  }, []);

  useEffect(() => {
    setAvaibleTopics(topicRequest.result);
  }, [topicRequest]);

  useEffect(() => {
    if (topicRequest.result) {
      setAvaibleTopics(prevAvaibleTopics => {
        let prevTopics = [...prevAvaibleTopics!];
        let filteredTopics = prevTopics.filter(isTopicAlreadySelected);
        console.log(filteredTopics);
        return filteredTopics;
      });
    }
  }, [selectedTopics]);

  console.log(avaibleTopics);

  return (
    <div>
      <div className='w-[220px] h-usable-screen bg-[#E7E4E4] [box-shadow:_3px_0_3px_rgba(0,0,0,0.4)] flex flex-col items-center pl-2'>
        <input
          className='w-[180px] h-[30px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] mt-3 outline-none pl-[5px]'
          onChange={handleInput}
          value={topicInput}
          placeholder='Search topics...'
        />
        <div className='w-[180px] mt-3 mb-3  flex flex-row flex-wrap gap-2'>
          {/* Selected topics */}
          {selectedTopics.length !== 0
            ? selectedTopics.map(selTopic => (
                <button
                  key={selTopic}
                  className='p-[5px] bg-[#E87331]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)]'
                >
                  {selTopic}
                </button>
              ))
            : null}
        </div>
        {/* Divider */}
        <div className='w-[85%] h-[4px] bg-[#a0a0a0]  rounded-[4px]'></div>

        <div className='w-[180px] mt-3 mb-3 flex flex-row flex-wrap gap-2'>
          {/* Avaible topics */}
          {!avaibleTopics ? (
            <p>Loading...</p>
          ) : (
            avaibleTopics.map(topicName => (
              <button
                key={topicName}
                onClick={() => {
                  handleSelectTopic(topicName);
                }}
                className='p-[5px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] inline-block'
              >
                {topicName}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
