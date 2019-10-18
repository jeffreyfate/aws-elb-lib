# aws-elb-lib
Library to interact with AWS ELB

[![Build Status](https://travis-ci.org/jeffreyfate/aws-elb-lib.svg?branch=master)](https://travis-ci.org/jeffreyfate/aws-elb-lib) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fapi%2Fgithub.com%2Fjeffreyfate%2Faws-elb-lib%2Fmaster)](https://stryker-mutator.github.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

There are lots of little tasks you might want to do with your AWS ELBs that doesn't come out of the box with the AWS SDK. Here what is covered using this library:

Get Target Group ARNs by Name

## Installation

  `npm install @jeffthefate/aws-elb-lib`

## Usage

    const {getTargetGroupArnsByName} = require('@jeffthefate/aws-elb-lib');

    const arnArray = await getTargetGroupArns(['name1', 'name2'])

## Tests

  `npm test`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)