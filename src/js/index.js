import '../css/style.css';
import images from '../img/image3.jpg';
let photo = document.querySelector('#photo');
import number from './test';

photo.src = images;
const fn = number;
fn(2,1);

if (module.hot) {
	module.hot.accept('./test.js', function () {
		console.log('Accepting the updated printMe module!');
		number(a,v);
	})
}