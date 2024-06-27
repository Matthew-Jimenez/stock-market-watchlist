# Stock Market Watchlist
 Browse and follow popular stocks and etfs


## Requirements

### Core Features


#### Search
:white_large_square: Search stock or etf by symbol
:white_large_square: User can select search result
:white_large_square: Based on search result, view current stock quote, change on day, after market quote

### Quote
:white_large_square: Quote refetches every 1.5 seconds
:white_large_square: Quote marks the close price at close.
:white_large_square: Quote begins after market pricing from close until 6am EST
:white_large_square: Quote displays premarket price from 6am to 9:30am
:white_large_square: Quote switches to market open mode at 9:30am


#### Charts
:white_large_square: View intrday line chart for searched symbol
:white_large_square: Chart is always the most recent trading day, from open to close.
:white_large_square: Hover over chart to see price at hovered time


#### Watch
:white_large_square: User can watch a symbol
:white_large_square: Watched symbols show up in watchlist, in right side panel.


#### Watchlist
:white_large_square: Selecting a watchlist item, focuses that company into the company/search view
:white_large_square: Watchlist items display quote, change on day, and a small non interactive intraday chart
:white_large_square: Watchlist items can be removed by selecting the watchlist edit button
:white_large_square: The watchlist edit button displays a delete button to the right of each watchlist item
:white_large_square: The watchlist should be infinite scrolling w/ support for list virtulization
