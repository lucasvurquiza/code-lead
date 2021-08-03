import moment from 'moment';
import './styles.css';

export type PostProps = {
  id?: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export const CardsPosts = (props: PostProps) => {
  var formatedDate = moment(props.created_datetime, moment.ISO_8601).format('DD/MM/YYYY');

  return (
    <div className='cardPosts'>
      <div className='titleCard'>
        <h1>{props.title}</h1>
      </div>
      <div className='userAndTime'>
        <h4 className='userNameH4'>{props.username}</h4>
        <h4 className='timePostsH4'>{formatedDate}</h4>
      </div>
      <br />
      <div className='textContent'>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
