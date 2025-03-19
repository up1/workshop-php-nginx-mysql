# Working with Ingress

## Step 1 :: Install Ingress Controller with helm
```
$helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
$helm repo update
$helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx --namespace ingress-nginx --create-namespace

$kubectl get po --namespace ingress-nginx
NAME                                        READY   STATUS    RESTARTS   AGE
ingress-nginx-controller-78df6b6cfb-btqfn   1/1     Running   0          7m47s
```

## Step 2 :: Enable ingress in minikube
```
$minikube addons enable ingress
$minikube addons list
```

## Step 3 :: Install service and ingress
```
$kubectl apply -f nginx-service-v2.yaml
$kubectl get service

$kubectl apply -f nginx-ingress.yaml
$kubectl get ingress
NAME           CLASS   HOSTS          ADDRESS     PORTS   AGE
demo-ingress   nginx   demo.app.com   127.0.0.1   80      4m38s

```

## Step 4 :: Testing

Config host file
```
127.0.0.1       demo.app.com
```

Run minikube tunnel
* ingress resources would be available at "127.0.0.1"
```
$minikube tunnel
```

Access to api
* http://localhost:8000
* http://demo.app.com:8000


