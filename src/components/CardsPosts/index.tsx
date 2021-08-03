import './styles.css';

export const CardsPosts = () => {
  return (
    <div className='cardPosts'>
      <div className='titleCard'>
        <h1>My First Post at CodeLeap Network!</h1>
      </div>
      <div className='userAndTime'>
        <h4 className='userNameH4'>@Victor</h4>
        <h4 className='timePostsH4'>25 minutes ago</h4>
      </div>
      <br />
      <div className='textContent'>
        <p>Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.</p>
      </div>
    </div>
  );
};
