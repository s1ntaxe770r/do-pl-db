# do-pl-db

A Project that deploys a 2 node Postgres cluster on DigitalOcean and a database user 

## Usage ⚙️

clone this project 
```bash
git clone https://github.com/s1ntaxe770r/do-pl-db.git
```

Install dependencies
```bash
cd do-pl-db && npm install
```

Set your digital ocean token 
```bash
pulumi config set digitalocean:token <insert token here> --secret
```


## Running ⌛️

```bash
pulumi up
```

## Output database URI

```bash
pulumi stack output db_uri --show-secrets > pass.db 
```

## Output user password

```bash
pulumi stack output pg_user_pass --show-secrets
```



## Clean up 
because I'm not made out of money all good things must come to an end 
```bash
pulumi destroy
```
