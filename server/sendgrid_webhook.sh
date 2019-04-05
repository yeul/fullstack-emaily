function localtunnel {
  lt -s eiwrfoncoi --port 5000
}
until localtunnel; do 
echo "localtunnel serve crashed"
sleep 2 
done