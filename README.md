## Days Calculator

## Requirements
* node `^6.0.0`
* npm `^3.0.0`

Development
-----------

1. Run `npm install`

After all dependencies installed:

1. Start the development server with `npm start`
2. Point your browser to [http://localhost:8080](http://localhost:8080)

Run test
`npm test`

Assumptions
-----------

* Custom date validation of form fields for browsers that don't support date type input.
* User is expected to provide date in one of these formats, if using browser with no date type input support:
   yyyy-mm-dd
   yyyy/mm/dd
   dd/mm/yyyy
   dd-mm-yyyy

* Recommended to use Edge or Chrome for optimal user experience using built in date widget.