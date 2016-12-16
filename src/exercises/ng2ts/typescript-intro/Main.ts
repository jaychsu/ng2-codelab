import {Codelab} from './Codelab';

// Use this file for reference.
const guests = [
  {
    coming: true,
    name: 'Sir Isaac Newton'
  },
  {
    coming: true,
    name: 'Marie Curie'
  },
  {
    coming: true,
    name: 'Albert Einstein'
  },
  {
    coming: false,
    name: 'Charles Darwin'
  }];

const codelab = new Codelab(guests);

// Angular2 is so much better than this:
document.body.innerHTML = '<ul>' +
  codelab.getGuestsComing().map(guest => `<li>${guest.name}</li>`).join('') +
  '</ul>';
