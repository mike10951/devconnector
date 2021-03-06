import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faUserTie,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
  return (
    <Fragment>
      <div className='dash-buttons'>
        <Link to='/edit-profile' className='btn btn-light'>
          <FontAwesomeIcon icon={faUserCircle} className='text-primary' /> Edit
          profile
        </Link>
        <Link to='/add-experiencie' className='btn btn-light'>
          <FontAwesomeIcon icon={faUserTie} className='text-primary' /> Add
          experience
        </Link>
        <Link to='/add-education' className='btn btn-light'>
          <FontAwesomeIcon icon={faGraduationCap} className='text-primary' />{' '}
          Add education
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardActions;
