import chai from 'chai';
import MealsService from '../api/services/meal.service';

const {expect} = chai;


describe('/GET meals', () => {
  it('it should GET all the meals', (done) => {
    chai.request(server)
        .get('/api/v1/meals')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});



describe('Retrieve single meal', () => {
  it('Should return one meal option object based on the id', () => {
    const meal = MealsService.getAMeal(1);

    expect(meal).to.deep.equal({
      id: 1,
      name: 'Fried Rice',
      size: 'Medium',
      price: '600',
    });
  });

  it('Should return an empty object when an invalid id is specified', () => {
    const meal = MealsService.getAMeal(6);

    expect(meal).to.deep.equal({ });
  });
});
describe('Delete one meal', () => {
  it('Should delete one meal option based on the id and return new meals list', () => {
    const meal = MealsService.deleteAMeal(1);

    expect(meal).to.deep.equal([
      {
        id: 1,
        name: 'Fried Rice',
        size: 'Medium',
        price: '600',
      },
      {
        id: 2,
        name: 'Eba & Egusi',
        size: 'Small',
        price: '400',
      },
      {
        id: 3,
        name: 'Semo & Okro',
        size: 'Medium',
        price: '800',
      },
      {
        id: 4,
        name: 'Basmati Rice & Beef',
        size: 'Large',
        price: '1500',
      },
    ]);
  });

  it('Should return an empty object if a meal with an invalid id is called', () => {
    const meal = MealsService.deleteAMeal(6);

    expect(meal).to.deep.equal({});
  });
});

describe('Add one meal', () => {
  it('Should add a meal to the existing meals and return the new meal', () => {
    const newMeal = { name: 'White Rice', size: 'Medium', price: '350' };
    const meal = MealsService.addMeal(newMeal);

    expect(meal).to.deep.equal(
      {
        id: 5,
        name: 'White Rice',
        size: 'Medium',
        price: '350',
      },
    );
  });
});

describe('Edit an existing meal', () => {
  it('Should edit an existing meal option based on the given id', () => {
    const newMeal = { name: 'Eba & Egusi', size: 'small', price: '400' };
    const meal = MealsService.editAMeal(2, newMeal);

    expect(meal).to.deep.equal(
      {
        id: 2,
        name: 'Eba & Egusi',
        size: 'small',
        price: '400',
      },
    );
  });

  it('Should return an empty object if an invalid meal id is specified', () => {
    const newMeal = { name: 'Eba & Egusi', size: 'small', price: '400' };
    const meal = MealsService.editAMeal(6, newMeal);

    expect(meal).to.deep.equal(
      {},
    );
  });
});

