<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Infos PHP - TP6</title>
</head>
<body>

<h1>Informations avec PHP</h1>

<?php
$etablissement = "Institut Supérieur de Technologie";
$module = "Développement Web";
$annee = 2025;

$a = 15;
$b = 7;
$addition = $a + $b;
$multiplication = $a * $b;

echo "<p><strong>Établissement :</strong> $etablissement</p>";
echo "<p><strong>Module :</strong> $module</p>";
echo "<p><strong>Année :</strong> $annee</p>";

echo "<hr>";

echo "<h2>Variables numériques</h2>";
echo "<p>A = $a</p>";
echo "<p>B = $b</p>";
echo "<p>Résultat addition : $addition</p>";
echo "<p>Résultat multiplication : $multiplication</p>";
?>

</body>
</html>
