import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

const pg_cluster =  new digitalocean.DatabaseCluster("pulumi-experiments",{
    engine: "pg",
    nodeCount: 2,
    region: "nyc1",
    size:"db-s-4vcpu-8gb",
    version:"11",
});


const pg_user = new digitalocean.DatabaseUser("non-adminguy",{clusterId:pg_cluster.id})

export const db_uri = pg_cluster.uri;
export const pg_user_pass = pg_user.password


