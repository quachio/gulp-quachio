'use strict';
import React from 'react';
import packageJSON from '../../../package.json';
import {SuperCellLogo, HappyFace} from './icons';

class ReactMessage extends React.Component {
    render() {
      const version = packageJSON.version;
      const style = {
        card: {
          width: '100%',
          background: '#fff',
          marginBottom: '20px',
          borderRadius: '5px',
          WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          padding: '30px 40px 30px 40px',
          marginTop: '20px',
        },
        version: {
          textAlign: 'center',
          margin: '-15px 0 40px',
        },
      };
      return (
      <div className='container'>
				<div className='card' style={style.card}>
					<h1 className='logo'>"SuperCell <SuperCellLogo /> Index Page"</h1>
										<p style={style.version}>version {version}</p>
					<p>Hello <HappyFace />, this is a <strong>{this.props.phrase}</strong></p>
				</div>
			</div>
      );
    }
}

export default ReactMessage;
