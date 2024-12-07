const details = {
  "id": "70A14483A74656746",
  "intent": "CAPTURE",
  "status": "COMPLETED",
  "purchase_units": [
      {
          "reference_id": "default",
          "amount": {
              "currency_code": "PLN",
              "value": "13.50"
          },
          "payee": {
              "email_address": "test@gmail.com"
          },
          "shipping": {
              "name": {
                  "full_name": "John Doe"
              },
              "address": {
                  "address_line_1": "Lul. Dubois Stanisława 121",
                  "admin_area_2": "Łódź",
                  "postal_code": "93-474",
                  "country_code": "PL"
              }
          },
          "payments": {
              "captures": [
                  {
                      "id": "1NB32289L30498144",
                      "status": "PENDING",
                      "status_details": {
                          "reason": "UNILATERAL"
                      },
                      "amount": {
                          "currency_code": "PLN",
                          "value": "13.50"
                      },
                      "final_capture": true,
                      "seller_protection": {
                          "status": "NOT_ELIGIBLE"
                      },
                      "create_time": "2024-12-07T10:16:43Z",
                      "update_time": "2024-12-07T10:16:43Z"
                  }
              ]
          }
      }
  ],
  "payer": {
      "name": {
          "given_name": "John",
          "surname": "Doe"
      },
      "email_address": "sb-4pomt34455863@personal.example.com",
      "payer_id": "55TXPCUHQZ48Y",
      "address": {
          "country_code": "PL"
      }
  },
  "create_time": "2024-12-07T10:16:17Z",
  "update_time": "2024-12-07T10:16:43Z",
  "links": [
      {
          "href": "https://api.sandbox.paypal.com/v2/checkout/orders/70A14483A74656746",
          "rel": "self",
          "method": "GET"
      }
  ]
}