# Savills Tech Test


-  [Requirements](#requirements)
-  [Resources](#resources)


## Requirements

We would like you to create a **GET** API endpoint */properties*  which returns an array of properties which adhere to the following format:

```
{
  property_id: 123456,
  address: {
    line1: 123 Oxford St,
    line2: London
  },
  currency: 'GBP',
  description: 'Located in the heart of London.',
  price: 4500000,
  is_sold: false,
  is_help_to_buy: true,
  bedrooms: 3,
  bathrooms: 2,
  receptions: 2
}
```

The API accepts a `language` header whose value can be either `en` or `fr`, we would expect requests with the `en` value to return properties with `GBP` currency values, and `EUR` currency values for `fr` language header respectively.

The endpoint should be able to filter properties based on `min_price` and `max_price` price query parameters to find the properties within the given range. If you have time maybe you could also filter on  `is_sold` and `is_help_to_buy` query parameters.

For example a request made to `/properties?min_price=500000&max_price=1500000` with a location header of `fr` would return properties between €500,000 and €1,500,000 and consist of no duplicates.


## Resources

We have set up a `/data` folder within the project root with two JSON files which represent properties with GBP currencies and EUR currencies for you to use. There may be duplicate properties within the file.

We have also set up a MongoDB instance with all the properties within a `properties` collection. If you would like to use the MongoDB instance instead feel free. You can connect to the instance with the following credentials.

`mongodb://<user>:<password>@ds251902.mlab.com:51902/savills-playground`

You will be provided with the username and password when the test begins.
