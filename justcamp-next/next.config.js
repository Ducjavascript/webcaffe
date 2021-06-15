const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [withOptimizedImages, {
      /* config for next-optimized-images */
    }],
    [withFonts, {}]
    // your other plugins here
  
  ],
      
  {
    env:{
        "BASE_URL": "http://localhost:3000",
        "MONGODB_URL":"mongodb+srv://ducjavascript95:ducjavascript95@cluster0.4cpws.mongodb.net/next_ecommerce?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET":"dvc5;U(].>S#Z{.bSWDAZ'SsL58aPLLX`SFnN2^s;8>jY5PWp?",
        "REFRESH_TOKEN_SECRET":"j@7y^?Ms9rswMP*Ff#?2J>BuQa5M/{D/HC9.qq?h)Y@b5<:F:L}r8Ej&kH4QHYVxb?yHnuj}9{jUhk]",
        "PAYPAL_CLIENT_ID":"AT6mkdZ3VIDJLJLc9ZN9dj58wCCQ3cOMUmgk8aWu252Fg1kJbV6hxMR1sec9ee8ZTSdrSgGijK6XZ-8f",
        "CLOUD_UPDATE_PRESET":"nextjs_store",
        "CLOUD_NAME":"minhthienvu",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/minhthienvu/image/upload"
    }
  }
  ); 