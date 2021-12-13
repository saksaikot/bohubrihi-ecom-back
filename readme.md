# Last 5 parts

- # 8.7 node - instant payment notification
  - implemented ipn listener, only console log the request
  - used express.urlencoded({extended:true})
- # 8.8 Node - accept response in ipn url

  - heroku --> project, on top More->view log, to see the log of node
  - added ipn address to payment controller
  - send "ok" request to ipn

- # 8.9 Node - order and payment model
  - created order and payment model
  - payment model to store the data from ipn
- # 8.10 Node - ipn controller
  - created ipn controller
  - if status valid then remove cartItems
  - then save the payment
  - if payment cancel then remove the order
- # 8.11 Node - Success message
