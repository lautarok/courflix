import { useState } from 'react';

// IMAGES
import Logo from '../global/media/logo.png';

// COMPONENTS
import Vector from '../components/Vector';

// STYLES
import './css/Edit.css';

function Edit(props) {
    let [_nameValue, _setNameValue] = useState(props.account.name || ''),
        [_imageSelected, _setImageSelected] = useState(props.account.image || 1),
        saved = false;
    
    function _handleNameValue(event) {
        _setNameValue(event.target.value);
    }
    
    function _handleImageSelectedValue(image) {
        _setImageSelected(image);
    }
    
    function _handleSave() {
        if(_nameValue.length <= 25 && _nameValue.length >= 3) {
            let data = JSON.parse(window.localStorage.getItem('accounts'));
            data[props.account.id].name = _nameValue;
            data[props.account.id].image = _imageSelected;
            window.localStorage.setItem('accounts', JSON.stringify(data));
            window.location = '/ManageProfiles';
        }
        else if(_nameValue.length >= 25) {
            alert('El nombre es muy largo');
        }
        else if(_nameValue.length < 3) {
            alert('El nombre es muy corto');
        }
    }
    
    function _handleDelete() {
        if(!props.account.isAdmin) {
            let data = JSON.parse(window.localStorage.getItem('accounts')),
                newData = [],
                setId = 0;
            for(let i = 0; i <= data.length - 1; i++) {
                if(i !== props.account.id) {
                    newData.push(data[i]);
                    newData[setId].id = setId;
                    setId++;
                }
            }
            console.log(newData);
            window.localStorage.setItem('accounts', JSON.stringify(newData));
            window.location = '/ManageProfiles';
        }
    }
    
    function _handleNewSave() {
        let data = JSON.parse(window.localStorage.getItem('accounts'));
        if(!props.account && _nameValue.length >= 3 && _nameValue.length <= 25 && !saved) {
            data.push({
                id: data.length,
                image: _imageSelected,
                name: _nameValue
            });
            window.localStorage.setItem('accounts', JSON.stringify(data));
            window.location = '/ManageProfiles';
            saved = true;
        }
        else if(_nameValue.length > 25) {
            alert('El nombre es muy largo');
        }
        else if(_nameValue.length < 3) {
            alert('El nombre es muy corto');
        }
    }
    
    return(
        <div id='page' className='edit'>
            <header>
                <a aria-label='Courflix' href='/'>
                    <img alt='Courflix logo' src={ Logo } />
                </a>
            </header>
            <div className='content'>
                <div className='title'>
                    <span>Editar perfil</span>
                </div>
                <div className='profile'>
                    <div className='user'>
                        <div className='avatar'>
                            <img src={ require('../global/media/users/' + _imageSelected + '.png').default } />
                        </div>
                        <div className='basic'>
                            <input type='text' autoComplete='off' placeholder='Nombre de la cuenta' value={ _nameValue } onChange={ _handleNameValue.bind(this) } contentEditable={ true } disabled={ false } />
                        </div>
                    </div>
                </div>
                <nav className='avatars'>
                    <div className='title'>
                        <span>Avatares</span>
                    </div>
                    <ul>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 1) }>
                                <img alt='avatar' src={ require('../global/media/users/1.png').default } />
                                {
                                    _imageSelected === 1 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 2) }>
                                <img alt='avatar' src={ require('../global/media/users/2.png').default } />
                                {
                                    _imageSelected === 2 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 3) }>
                                <img alt='avatar' src={ require('../global/media/users/3.png').default } />
                                {
                                    _imageSelected === 3 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 4) }>
                                <img alt='avatar' src={ require('../global/media/users/4.png').default } />
                                {
                                    _imageSelected === 4 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 5) }>
                                <img alt='avatar' src={ require('../global/media/users/5.png').default } />
                                {
                                    _imageSelected === 5 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 6) }>
                                <img alt='avatar' src={ require('../global/media/users/6.png').default } />
                                {
                                    _imageSelected === 6 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                        <li>
                            <button onClick={ _handleImageSelectedValue.bind(this, 7) }>
                                <img alt='avatar' src={ require('../global/media/users/7.png').default } />
                                {
                                    _imageSelected === 7 ? (
                                        <div className='selected'>
                                            <Vector set='edit' />
                                        </div>
                                    ) : null
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
                <nav className='actions'>
                    <button onClick={ props.account ? ( _handleSave.bind(this) ) : ( _handleNewSave.bind(this) ) } className='primary'>
                        <span>Guardar</span>
                    </button>
                    <a href='/ManageProfiles' style={ props.account.isAdmin ? ({ marginRight: 0 }) : (null) }>
                        <span>Cancelar</span>
                    </a>
                    {
                        props.account && !props.account.isAdmin ? (
                            <button onClick={ _handleDelete.bind(this) } style={{ marginRight: 0 }}>
                                <span>Eliminar perfil</span>
                            </button>
                        ) : null
                    }
                </nav>
            </div>
        </div>
    );
}

export default Edit;