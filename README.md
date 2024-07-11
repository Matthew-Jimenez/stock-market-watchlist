# Stock Market Watchlist

 Browse and follow popular stocks and etfs.

##### [Live Demo App](https://stock-market-watchlist.netlify.app/) 
##### https://stock-market-watchlist.netlify.app/


## Core Features  

#### Search
:white_check_mark: Search stock or etf by symbol

:white_check_mark: User can select search result


### Quote

:white_check_mark: Quote marks the close price at close.

:white_check_mark: Quote begins after market pricing from close until 6am EST

:white_check_mark: Quote switches to market open mode at 9:30am

:white_large_square: Quote displays premarket price from 6am to 9:30am

:white_large_square: Quote displays aftermarket price from 1pm to 6am EST

:white_large_square: Quote refetches every 1.5 seconds


#### Charts
:white_check_mark: View intrday line chart for searched symbol

:white_check_mark: Chart is always the most recent trading day, from open to close.

:white_check_mark: Hover over chart to see price at hovered time



#### Watch
:white_check_mark: User can watch a symbol

:white_check_mark: User can unwatch a symbol.

:white_check_mark: Watched symbols show up in watchlist, in right side panel.


#### Watchlist
:white_check_mark: Selecting a watchlist item, focuses that company into the company/search view

:white_large_square: Watchlist items display quote, change on day, and a small non interactive intraday chart

:white_large_square: Watchlist items can be removed by selecting the watchlist edit button

:white_large_square: The watchlist edit button displays a delete button to the right of each watchlist item

:white_large_square: The watchlist should be infinite scrolling w/ support for list virtulization



## E2E (Playwright)

Auto generate tests with Codegen

```yarn playwright codegen```

Run the end-to-end tests

```yarn playwright test``` 

Start the interactive UI mode

```yarn playwright test --ui```

Runs the tests in debug mode

```yarn playwright test --debug```

