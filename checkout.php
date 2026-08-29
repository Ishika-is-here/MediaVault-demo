<?php
session_start();
$userName = isset($_SESSION['username']) ? htmlspecialchars($_SESSION['username']) : '';
$userEmail = '';
if (!empty($userName)) {
    // if you had email in session you may add it similarly; keeping blank otherwise
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - MediaVault</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
</head>
<body>
<div class="checkout-wrapper">
    <h1>Checkout</h1>
    <p id="cartStatus" style="color:#ff4757;"></p>

    <div class="row">
        <div class="col-2">
            <h2>Order Summary</h2>
            <div id="orderSummary"></div>
            <h3>Total: <span id="orderTotal">₹0.00</span></h3>
        </div>

        <div class="col-2">
            <h2>Shipping & Billing</h2>

            <form action="actions.php" method="POST" id="orderForm">
                <input type="hidden" name="form_type" value="place_order">
                <input type="hidden" name="total_amount" id="total_amount" value="0">
                <input type="hidden" name="items" id="items" value="">

                <div class="form-group">
                    <label for="customer_name">Name</label>
                    <input type="text" id="customer_name" name="customer_name" value="<?php echo $userName; ?>" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value="<?php echo $userEmail; ?>" required>
                </div>

                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone" required pattern="[0-9]{7,15}" placeholder="Digits only">
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <textarea id="address" name="address" rows="3" required></textarea>
                </div>

                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" name="city" required>
                </div>

                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" required>
                </div>

                <div class="form-group">
                    <label for="zip">ZIP / Postal Code</label>
                    <input type="text" id="zip" name="zip" required>
                </div>

                <button type="submit" class="btn-order">Confirm and Place Order</button>
            </form>

            <p><a href="index.php">Back to shop</a></p>
        </div>
    </div>
</div>

<script src="script2.js"></script>

</body>
</html>
