# Stock Market Watchlist
 Browse and follow popular stocks and etfs

https://stock-market-watchlist.netlify.app/
[Demo App](https://stock-market-watchlist.netlify.app/) 


## Requirements

### Core Features


#### Search
:white_check_mark: Search stock or etf by symbol

:white_check_mark: User can select search result

:white_large_square: Based on search result, view current stock quote, change on day, after market quote


### Quote
:white_large_square: Quote refetches every 1.5 seconds

:white_check_mark: Quote marks the close price at close.

:white_check_mark: Quote begins after market pricing from close until 6am EST

:white_large_square: Quote displays premarket price from 6am to 9:30am

:white_check_mark: Quote switches to market open mode at 9:30am



#### Charts
:white_check_mark: View intrday line chart for searched symbol

:white_check_mark: Chart is always the most recent trading day, from open to close.

:white_check_mark: Hover over chart to see price at hovered time



#### Watch
:white_check_mark: User can watch a symbol

:white_check_mark: Watched symbols show up in watchlist, in right side panel.



#### Watchlist
:white_check_mark: Selecting a watchlist item, focuses that company into the company/search view

:white_large_square: Watchlist items display quote, change on day, and a small non interactive intraday chart

:white_large_square: Watchlist items can be removed by selecting the watchlist edit button

:white_large_square: The watchlist edit button displays a delete button to the right of each watchlist item

:white_large_square: The watchlist should be infinite scrolling w/ support for list virtulization





## E2E (Playwright)

```yarn playwright test
    Runs the end-to-end tests.

  yarn playwright test --ui
    Starts the interactive UI mode.

  yarn playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  yarn playwright test example
    Runs the tests in a specific file.

  yarn playwright test --debug
    Runs the tests in debug mode.

  yarn playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    yarn playwright test```