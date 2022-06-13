const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

console.log()
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber} R. ${order.address.street},Nº: ${order.address.number}, AP: ${order.address.apartment}`; 
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment = 50;
  const pizzass = Object.keys(order.order.pizza);
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzass[0]}, ${pizzass[1]} e ${order.order.drinks.coke.type} é R$${order.payment},00.`)

}

orderModifier(order);