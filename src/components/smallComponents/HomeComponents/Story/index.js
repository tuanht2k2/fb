import classNames from 'classnames/bind';

import instance from '../../../../callApi';
import { useEffect, useState } from 'react';

import styles from './Story.module.scss';

import { StoryItem } from './storyItem';

const cx = classNames.bind(styles);

function Story() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    instance.get(`/stories`).then((res) => {
      setStories(res.data);
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <ul className={cx('stories-list')}>
        {stories.map((story, index) => (
          <StoryItem
            key={index}
            id={story.id}
            img={story.img}
            video={story.video}
            isCreate={false}
            userId={story.userId}
          />
        ))}
      </ul>
    </div>
  );
}

export default Story;
