
<p align="center">
   <br/>
   <a href="https://blueauth.io" target="_blank"><img width="150px" src="https://cdn.kacdn.org/file/kacdn1/blueauth/logo.png" /></a>
   <h3 align="center"><a href="https://github.com/key-lab/blueauth">BlueAuth</a> Javascript Client</h3>
</p>

<details open="open">
<summary>Table of Contents</summary>

- [Installation](#installation)
- [Description](#description)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Examples](#examples)

</details>

# Installation
```
npm install --save blueauth-client
```

# Description

This is a javascript client for the [BlueAuth](https://github.com/key-lab/blueauth) GraphQL endpoint that is auto-generated from the schema.

# Quick Start

This assumes the BlueAuth api endpoint is at the default location of `/api/blueauth`.
```javascript
import React, { useState } from 'react';
import blueauth from 'blueauth-client';

export default function Page() {
  const [email, setEmail] = useState<string>('example@example.com');

  const handleRegister = async () => {
    const { result } = await blueauth().register({ identity: { email } });
    console.log('> new user', result); // whatever is returned from createIdentity
  };

  const handleLogin = async () => {
    const { result } = await blueauth().startEmailLogin({
      identity: { email },
      redirectURL: '/dashboard'
    });
    console.log('> is login started:', result); // true or false
  };

  const handleRegisterOrLogin = async () => {
    const { result } = await blueauth().registerOrStartEmailLogin({
      identity: { email },
      redirectURL: '/dashboard'
    });
    console.log('> is new user or is login started?', result);
  };

  const handleWhoami = async () => {
    const { whoami } = await blueauth().getSelf();
    console.log('> you are', whoami);
  };

  const handleLogout = async () => {
    const { result } = await blueauth().logout();
    console.log('> is logged out', result); // true
  };

  return (
    <div>
      <h1>Log In</h1>
      <input
        placeholder="your@email.com"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleRegisterOrLogin}>Start Register or Login</button>
      <button onClick={handleWhoami}>Who Am I?</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
```
# Documentation
## Configuration
All settings and configurations are done by passing a single configuration object.
The config object and all properties are optional.

Configuration object properties:
Name| Default | Type | Description
------- | ------------- | ------------- | ----------
url | /api/blueauth | string | The endpoint of the BlueAuth service
sdkFunctionWrapper | | function | Function that wraps around the client requests. Further documentation [here](https://www.graphql-code-generator.com/docs/plugins/typescript-graphql-request#simple-request-middleware).
graphqlClientOptions | | object | Options object to pass to the underlying [graphql-request](https://github.com/prisma-labs/graphql-request) client.


# Examples
```javascript
// Using a custom BlueAuth API endpoint
import blueauth from  'blueauth-client';

const newClient = blueauth({ url: 'https://api.myservice.com/differentBlueauth' });

const registerNewUser = () => {
  const { result } = await newClient.register({ identity: { email } });
  console.log('> registration result', result);
}
```
