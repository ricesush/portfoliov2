import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMessage,
  faEllipsisVertical,
  faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';

export const PostsList = () => {
  return (
    <>
      <section className='d-flex justify-content-between px-5 align-items-center'>
        <h1>
          <FontAwesomeIcon icon={faMessage} flip='horizontal' />
          <span> New Post</span>
        </h1>

        <button type='button' className='btn btn-outline-success'>
          <FontAwesomeIcon icon={faPlus} beatFade /> Add New Post
        </button>
      </section>
      <section className='p-5'>
        <div className='card mb-3 post' data-aos='fade-up'>
          <div className='card-header d-flex justify-content-between align-items-center'>
            <div className=''>
              <div className='fw-bold'>Jose Rizal</div>
              <small className='d-flex align-items-center'>
                10h <FontAwesomeIcon icon={faEarthAsia} className='ps-1' />
              </small>
            </div>
            <div className='dropdown'>
              <button
                className='btn'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Edit
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Caption</h5>
            <p className='card-text'>Here goes some content</p>
          </div>
          <div className='card-footer text-body-light'></div>
        </div>
      </section>
    </>
  );
};
