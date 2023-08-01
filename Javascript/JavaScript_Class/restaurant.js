let order = (call_production) => {
  setTimeout(() => {
    console.log("customer has placed an order");
    call_production();
  }, 5000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("buy allo");
      setTimeout(() => {
        console.log("Chop the allo");
        setTimeout(() => {
          console.log("buy dough");
          setTimeout(() => {
            console.log("water and dough mix");
            setTimeout(() => {
              console.log("add allo in dough");
              setTimeout(() => {
                console.log("stover on");
                setTimeout(() => {
                  console.log("select the flame");
                  setTimeout(() => {
                    console.log("to bake the allo kulcha");
                  }, 5000);
                }, 2000);
              }, 1000);
            }, 2000);
          }, 3000);
        }, 3000);
      }, 1000);
    }, 5000);
  }, 2000);
};

order(production);
