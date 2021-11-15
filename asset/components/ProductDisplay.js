app.component('product-display', {
    props:['product'],
    template: 
  /*html*/
    `<div class="col">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-color1">{{product.name}}</h5>
                <p class="card-text text-color1">
                    {{product.desc}}
                </p>
                <p class="fs-5 card-text text-color">Rp 
                    {{product.price}}
                </p>
                <button class="btn btn-success" type="button"
                v-on:click="$emit('add-to-cart')">Add to Cart</button>
                <button class="mx-1 btn btn-outline-danger" type="..."
                v-on:click="$emit('remove-from-cart')">Remove</button>
            </div>
        </div>
    </div>`,
})