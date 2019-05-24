import * as sapper from '@sapper/app';
import 'nes.css/css/nes.css';
import 'flexboxgrid/css/flexboxgrid.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'pickerjs/dist/picker.css'

sapper.start({
	target: document.querySelector('#sapper')
});