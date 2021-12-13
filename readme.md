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
  - # important I wrongly included profile schema into order, and it automatically included to mongo index, but later when i changed it, the previous index was still there and throwing error, `profile.user index ....`, so if you change any unique then check first if it still on index list
- # 8.11 Node - Success message
