// IMAGES
import Logo from '../global/media/logo.png';

// STYLES
import './css/View.css';

function View(props) {
    return(
        <div id='page' className='view' style={ props.account.image !== 6 && props.account.image !== 7 ? ({ backgroundImage: 'url(\'' + require('../global/media/covers/' + props.account.image + '.jpg').default + '\')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }) : (props.account.image === 7 ? ({ backgroundColor: '#C00' }) : ({ backgroundColor: '#00C' })) }>
            <header>
                <a aria-label='Courflix'>
                    <img alt='Courflix logo' src={ Logo } />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href={ '/edit/' + props.account.id }>
                                <span>Editar</span>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='primary'>
                                <span>Ver cuentas</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='content'>
                <div className='text'>
                    <div className='title'>
                        <span>Estas en el perfil de <span>{ props.account.name }</span></span>
                    </div>
                    <div className='description'>
                        <span>Este sistema guarda datos con localStorage, creado por Augusto Lautaro Kazalukian</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href='/edit/new' className='primary'>
                                    <span>Crear usuario</span>
                                </a>
                            </li>
                            <li>
                                <a href={ '/edit/' + props.account.id }>
                                    <span>Editar usuario</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default View;