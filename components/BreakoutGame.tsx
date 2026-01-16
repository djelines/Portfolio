import React, { useRef, useEffect, useState } from "react";
import { Terminal, Code2, RotateCcw, Trophy, Keyboard } from "lucide-react";

// Game Constants (KISS: Defined outside component)
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PADDLE_HEIGHT = 18;
const PADDLE_WIDTH = 90;
const BALL_RADIUS = 6;
const BRICK_ROW_COUNT = 5;
const BRICK_COLUMN_COUNT = 8;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 40;
const BRICK_OFFSET_LEFT = 35;
const BRICK_WIDTH =
  (CANVAS_WIDTH -
    2 * BRICK_OFFSET_LEFT -
    (BRICK_COLUMN_COUNT - 1) * BRICK_PADDING) /
  BRICK_COLUMN_COUNT;
const BRICK_HEIGHT = 35;

// Theme Colors (Matches Post-its)
const BRICK_COLORS = ["#fff7d1", "#ffe4e1", "#e0f7fa", "#f0f4c3"];
const SYNTAX = [
  "const",
  "let",
  "var",
  "if",
  "else",
  "return",
  "<div>",
  "func",
  "import",
  "export",
  "class",
  "this",
  "async",
  "await",
  "try",
  "catch",
];

const BreakoutGame = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameState, setGameState] = useState("start");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game State
    let ballX = CANVAS_WIDTH / 2;
    let ballY = CANVAS_HEIGHT - 30;
    let dx = 4;
    let dy = -4;
    let paddleX = (CANVAS_WIDTH - PADDLE_WIDTH) / 2;
    let rightPressed = false;
    let leftPressed = false;
    let animationId;

    // Initialize Bricks
    const bricks = Array.from({ length: BRICK_COLUMN_COUNT }, (_, c) =>
      Array.from({ length: BRICK_ROW_COUNT }, (_, r) => ({
        x: c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT,
        y: r * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP,
        status: 1,
        text: SYNTAX[Math.floor(Math.random() * SYNTAX.length)],
        color: BRICK_COLORS[r % BRICK_COLORS.length],
      }))
    );

    const keyDownHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
        e.preventDefault();
      }
      if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
        e.preventDefault();
      }
    };

    const keyUpHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
      if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
    };

    const draw = () => {
      if (!isPlaying) return;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Bricks
      bricks.forEach((col) =>
        col.forEach((b) => {
          if (b.status === 1) {
            ctx.beginPath();
            ctx.roundRect(b.x, b.y, BRICK_WIDTH, BRICK_HEIGHT, 6);
            ctx.fillStyle = b.color;
            ctx.fill();
            ctx.fillStyle = "#3a1e16";
            ctx.font = "11px monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(b.text, b.x + BRICK_WIDTH / 2, b.y + BRICK_HEIGHT / 2);
            ctx.closePath();

            // Collision
            if (
              ballX > b.x &&
              ballX < b.x + BRICK_WIDTH &&
              ballY > b.y &&
              ballY < b.y + BRICK_HEIGHT
            ) {
              dy = -dy;
              b.status = 0;
              setScore((prev) => prev + 10);
            }
          }
        })
      );

      if (bricks.flat().every((b) => b.status === 0)) {
        // Toutes les briques sont détruites
        setGameState("winner");
        setIsPlaying(false);
        return; // Stop le draw loop
      }

      // Draw Ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#a66646";
      ctx.fill();
      ctx.closePath();

      // Draw Paddle
      ctx.beginPath();
      ctx.roundRect(
        paddleX,
        CANVAS_HEIGHT - PADDLE_HEIGHT - 10,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        6
      );
      ctx.fillStyle = "#522b1e";
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "SPACE",
        paddleX + PADDLE_WIDTH / 2,
        CANVAS_HEIGHT - PADDLE_HEIGHT - 10 + PADDLE_HEIGHT / 2
      );
      ctx.closePath();

      // Movement & Collision Logic
      if (ballX + dx > CANVAS_WIDTH - BALL_RADIUS || ballX + dx < BALL_RADIUS)
        dx = -dx;
      if (ballY + dy < BALL_RADIUS) dy = -dy;
      else if (ballY + dy > CANVAS_HEIGHT - BALL_RADIUS - 10) {
        if (ballX > paddleX - 5 && ballX < paddleX + PADDLE_WIDTH + 5) {
          dy = -dy * 1.05;
          dx = dx * 1.02;
        } else {
          setGameState("gameover");
          setIsPlaying(false);
          return;
        }
      }

      ballX += dx;
      ballY += dy;

      if (rightPressed && paddleX < CANVAS_WIDTH - PADDLE_WIDTH) paddleX += 7;
      if (leftPressed && paddleX > 0) paddleX -= 7;

      animationId = requestAnimationFrame(draw);
    };

    if (gameState === "playing") {
      document.addEventListener("keydown", keyDownHandler);
      document.addEventListener("keyup", keyUpHandler);
      draw();
    } else {
      // Static render for start/gameover
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // Just clear to let overlays show
    }

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [isPlaying, gameState]);

  const startGame = () => {
    setScore(0);
    setGameState("playing");
    setIsPlaying(true);
  };

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  return (
    <div className="hidden sm:block w-full max-w-4xl mx-auto px-4 py-12 text-center select-none">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-latte-900 dark:text-latte-100 flex items-center justify-center gap-3">
          <Terminal className="text-latte-500" />
          Dev Breakout
        </h2>
        <p className="text-latte-600 dark:text-latte-300 mt-2">
          Débuggez le code en cassant les briques de syntaxe !
        </p>
      </div>

      <div className="relative bg-latte-200 dark:bg-latte-800 p-4 rounded-xl shadow-2xl border-4 border-latte-400 dark:border-latte-600 inline-block">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="bg-latte-50 dark:bg-latte-900 rounded-lg shadow-inner w-full max-w-[600px] cursor-none"
        />

        {gameState === "start" && (
          <div className="absolute inset-0 bg-latte-900/40 backdrop-blur-sm flex items-center justify-center z-20 rounded-xl">
            <button
              onClick={startGame}
              className="group flex flex-col items-center gap-2 bg-white dark:bg-latte-800 px-8 py-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              <Code2 size={48} className="text-latte-500 fill-current" />
              <span className="font-bold text-xl text-latte-800 dark:text-latte-100">
                LANCER LE SCRIPT
              </span>
            </button>
          </div>
        )}

        {gameState === "winner" && (
          <div className="absolute inset-0 bg-latte-900/60 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-white animate-pop rounded-xl">
            <h3 className="text-3xl font-extrabold mb-2 text-red-300">
              Compilation Win !
            </h3>
            <p className="text-xl mb-6">Bugs fixed: {score}</p>
            <button
              onClick={startGame}
              className="flex items-center gap-2 bg-latte-500 hover:bg-latte-400 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all"
            >
              <RotateCcw size={20} /> Recompiler
            </button>
          </div>
        )}

        {gameState === "gameover" && (
          <div className="absolute inset-0 bg-latte-900/60 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-white animate-pop rounded-xl">
            <h3 className="text-3xl font-extrabold mb-2 text-red-300">
              Compilation Failed !
            </h3>
            <p className="text-xl mb-6">Bugs fixed: {score}</p>
            <button
              onClick={startGame}
              className="flex items-center gap-2 bg-latte-500 hover:bg-latte-400 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all"
            >
              <RotateCcw size={20} /> Recompiler
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-latte-500 dark:text-latte-400 bg-white/50 dark:bg-latte-900/50 py-3 px-6 rounded-full inline-block backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Keyboard size={16} />
          <span className="font-semibold">Notice :</span>
        </div>
        <p>
          Utilisez les flèches{" "}
          <span className="font-mono bg-latte-200 dark:bg-latte-700 px-1 rounded">
            ←
          </span>{" "}
          et{" "}
          <span className="font-mono bg-latte-200 dark:bg-latte-700 px-1 rounded">
            →
          </span>{" "}
          pour déplacer le paddle.
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-8 text-latte-800 dark:text-latte-200">
        <div className="flex items-center gap-2 bg-white dark:bg-latte-800 px-4 py-2 rounded-lg shadow-sm border border-latte-200 dark:border-latte-700">
          <Trophy size={18} className="text-yellow-500" />{" "}
          <span className="font-bold">Record: {highScore}</span>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-latte-800 px-4 py-2 rounded-lg shadow-sm border border-latte-200 dark:border-latte-700">
          <span className="font-bold">Score: {score}</span>
        </div>
      </div>
    </div>
  );
};

export default BreakoutGame;
