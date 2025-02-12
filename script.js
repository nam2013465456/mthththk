gameOver = true;
                    alert("Game Over! Điểm: " + score);
                    updateHighScore();
                }
            }

            // Kiểm tra va chạm với đạn
            bullets.forEach((bullet, bulletIndex) => {
                if (
                    bullet.x < asteroid.x + asteroid.width &&
                    bullet.x + bullet.width > asteroid.x &&
                    bullet.y < asteroid.y + asteroid.height &&
                    bullet.y + bullet.height > asteroid.y
                ) {
                    asteroids.splice(index, 1);
                    bullets.splice(bulletIndex, 1);
                    score++;
                    explosionSound.play();
                    spawnExplosion(asteroid.x, asteroid.y);
                }
            });

            if (asteroid.y > canvas.height) asteroids.splice(index, 1);
        });

        // Vẽ hiệu ứng nổ
        explosions.forEach((explosion, index) => {
            ctx.drawImage(explosionImg,
