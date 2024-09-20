


async function deploy() {

  
    const Resolver = await ethers.getContractFactory("OffchainResolver");
    const resolver = await Resolver.deploy();
    await resolver.waitForDeployment();
    console.log(resolver.target)


}

deploy()
