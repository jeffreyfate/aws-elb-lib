# aws-elb-lib
Library to interact with AWS ELB

[![Build Status](https://travis-ci.org/jeffreyfate/aws-elb-lib.svg?branch=master)](https://travis-ci.org/jeffreyfate/aws-elb-lib) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fapi%2Fgithub.com%2Fjeffreyfate%2Faws-elb-lib%2Fmaster)](https://stryker-mutator.github.io)

There are lots of little tasks you might want to do with your AWS ELBs that doesn't come out of the box with the AWS SDK. Here what is covered using this library:

Get Target Group ARNs, given Names

## Installation

  `npm install @jeffthefate/aws-elb-lib`

## Usage

    const {getTargetGroupArns} = require('@jeffthefate/aws-elb-lib');

    const arnArray = getTargetGroupArns(['name1', 'name2'])

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.