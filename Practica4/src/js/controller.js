const controller = function (platform) {
  const _ = undefined;
  this.productos;
  let total;

  const gui = {
    getNode: element => platform.getElementById(element),
    initEvent: function () {
      Array.prototype.forEach.call(platform.getElementsByName('optradio'), function (e) {
        e.addEventListener("click", function (event) {
          printTableComision(event);
        });
      });
    },
    clearResult: function () {
      gui.getNode('PayComision').textContent = "";
      gui.getNode('Comision').textContent = "";
      gui.getNode('TotalComision').textContent = "";
    }
  };

  const init = (productService, orderService) => {
    this.productService = productService;
    this.orderService = orderService;
    this.productos = productService.productos;

    gui.initEvent();
    showProducts();
  }

  const showProducts = () => {
    Object.keys(this.productos).forEach(keyProduct => {
      printProduct(this.productos[keyProduct]);
    });
  };

  const printProduct = product => {
    const tr = generateNode('tr', _, {
      id: product.hash + 'tr',
    }, gui.getNode('table-product'));

    const tdName = generateNode('td', _, {
      id: 'Name'
    }, tr);
    insertText(product._nombre, tdName);

    const tdPrice = generateNode('td', _, {
      id: 'Price'
    }, tr);
    insertText(product._precio, tdPrice);

    const tdInput = generateNode('td', _, _, tr);
    const Input = generateNode('input', _, {
      type: 'text'
    }, tdInput);

    const tdButton = generateNode('td', _, _, tr);
    const button = generateNode('button', ['addProduct'], {
      type: 'button',
      disabled: ''
    }, tdButton);

    Input.oninput = () => {
      Input.value > 0 ? button.removeAttribute("disabled") : button.setAttribute('disabled', '');
    };

    button.onclick = () => {
      this.orderService.addItem(product,
        parseInt(gui.getNode(product.hash + 'tr')
          .childNodes[2]
          .firstChild.value));
      
      gui.getNode('PriceComision').textContent = "";
      insertText(this.orderService.totalBill(), gui.getNode('PriceComision'));
      
      printTableCalculate();
    }
    insertText('Añadir', button);
  };

  const printTableCalculate = () => {
    gui.getNode('table-calculatePrice').innerHTML = "";
    this.orderService._order._order.forEach((value, key, map) => {

      const tr = generateNode('tr', _, {
        id: 'tr' + key,
      }, gui.getNode('table-calculatePrice'));

      const tdName = generateNode('td', _, {
        id: value.producto.hash + "tr"
      }, tr);
      insertText(value.producto._nombre, tdName);

      const tdPrice = generateNode('td', _, {
        id: value.producto.hash + "tr"
      }, tr);
      insertText(this.orderService.detailPrice(value.producto, value.quantity), tdPrice);

      const tdUnit = generateNode('td', _, {
        id: value.producto.hash + "tr"
      }, tr);
      insertText(value.quantity, tdUnit);

      const tdButton = generateNode('td', _, {
        id: value.producto.hash + "tr1"
      }, tr);

      const button = generateNode('button', ['deleteProduct'], {
        type: 'button'
      }, tdButton);
      insertText('eliminar', button);

      button.onclick = () => {
        this.orderService.removeItem(value.producto);

        gui.getNode('PriceComision').textContent = "";
        insertText(this.orderService.totalBill(), gui.getNode('PriceComision'));

        gui.getNode(value.producto.hash + "tr1").parentNode.remove();

        this.orderService._order._order.size > 0 ?
          (gui.getNode('trTotalBill').innerHTML = "", insertText(this.orderService.totalBill(), tdTotalPrice))
          :
          (gui.getNode('trTotalBill').innerHTML = 0, gui.getNode('trPriceTotal').remove());
      };
    });
    const trTotal = generateNode('tr', _, {
      id: 'trPriceTotal'
    }, gui.getNode('table-calculatePrice'));

    const tdTotal = generateNode('td', _, _, trTotal);
    insertText('Total', tdTotal);

    const tdTotalPrice = generateNode('td', _, {
        id: 'trTotalBill'
      },
      trTotal);
    insertText(this.orderService.totalBill(), tdTotalPrice);

    const tdGhost = generateNode('td', _, _, trTotal);
  };

  const printTableComision = function (event) {
    gui.clearResult();
    insertText(event.target.nextSibling.nextSibling.outerText, gui.getNode('PayComision'));
    insertText(event.target.value, gui.getNode('Comision'));
    insertText(this.orderService.totalComision(event.target.value), gui.getNode('TotalComision'));
  };

  function generateNode(type, listClass, attributes, parentNode) {
    const element = platform.createElement(type);
    if (listClass) element.classList.add(...listClass)
    if (attributes) {
      Object.entries(attributes).forEach(attribute => {
        element.setAttribute(attribute[0], attribute[1])
      });
    }
    return parentNode.appendChild(element);
  }

  function insertText(text, parentNode) {
    const element = platform.createTextNode(text);
    parentNode.appendChild(element);
  }

  return {
    init
  }

}(window.document);