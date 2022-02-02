#lang racket

(define-struct ingredient [name quantity])
; An Ingredient is a structure:
;   (make-ingredient String String)
; intepretation an ingredient's name and quantity (scalar + unit)

(define-struct medium-saucepan [covered? stirred? time-cooked time-sitting ingredients])
; A Medium-Saucepan is a structure:
;   (make-medium-saucepan Boolean Boolean Number Number [List-of Ingredient])
; intepretation a medium saucepan containing the listed ingredients which either is or isn't covered,
;   either has or has not been stirred, has been cooked for the given duration (in minutes), and has
;   sat for the given duration (in minutes)

; Medium-Saucepan -> Medium-Saucepan
; covers the given saucepan
(define (cover-saucepan saucepan)
  (make-medium-saucepan
    #true
    (medium-saucepan-stirred? saucepan)
    (medium-saucepan-time-cooked saucepan)
    (medium-saucepan-time-sitting saucepan)
    (medium-saucepan-ingredients saucepan)))

; Medium-Saucepan -> Medium-Saucepan
; uncovers the given saucepan
(define (uncover-saucepan saucepan)
  (make-medium-saucepan
    #false
    (medium-saucepan-stirred? saucepan)
    (medium-saucepan-time-cooked saucepan)
    (medium-saucepan-time-sitting saucepan)
    (medium-saucepan-ingredients saucepan)))

; Medium-Saucepan -> Medium-Saucepan
; stirs the given saucepan
(define (stir-saucepan saucepan)
  (make-medium-saucepan
    (medium-saucepan-covered? saucepan)
    #true
    (medium-saucepan-time-cooked saucepan)
    (medium-saucepan-time-sitting saucepan)
    (medium-saucepan-ingredients saucepan)))

; Number Medium-Saucepan -> Medium-Saucepan
; cooks the saucepan on a stove for the given number of minutes
(define (cook-saucepan cook-time saucepan)
  (make-medium-saucepan
    (medium-saucepan-covered? saucepan)
    (medium-saucepan-stirred? saucepan)
    (+ cook-time (medium-saucepan-time-cooked saucepan))
    (medium-saucepan-time-sitting saucepan)
    (medium-saucepan-ingredients saucepan)))

; Number Medium-Saucepan -> Medium-Saucepan
; lets the saucepan sit for the given number of minutes
(define (let-sit sit-time saucepan)
  (make-medium-saucepan
    (medium-saucepan-covered? saucepan)
    (medium-saucepan-stirred? saucepan)
    (medium-saucepan-time-cooked saucepan)
    (+ sit-time (medium-saucepan-time-sitting saucepan))
    (medium-saucepan-ingredients saucepan)))

; Ingredient Medium-Saucepan -> Medium-Saucepan
; adds given ingredient to saucepan
(define (add-ingredient ingredient saucepan)
  (make-medium-saucepan
    (medium-saucepan-covered? saucepan)
    #false
    (medium-saucepan-time-cooked saucepan)
    (medium-saucepan-time-sitting saucepan)
    (cons ingredient (medium-saucepan-ingredients saucepan))))

; Medium-Saucepan -> [Ingredient or String]
; serves the contents of the given saucepan
(define (serve saucepan)
  (cond
    [(and
      (not (medium-saucepan-covered? saucepan))
      (medium-saucepan-stirred? saucepan)
      (= 7 (medium-saucepan-time-cooked saucepan))
      (= 5 (medium-saucepan-time-sitting saucepan))
      (equal?
        (map ingredient-name (medium-saucepan-ingredients saucepan))
        (list
          "sliced granny smith apple"
          "cinnamon"
          "milk"
          "maple syrup"
          "butter"
          "salt"
          "water"
          "rolled oats"))
      (equal?
        (map ingredient-quantity (medium-saucepan-ingredients saucepan))
        (list
          "1 apple"
          "0.25 tsp"
          "1 splash"
          "1 tbsp"
          "1 tbsp"
          "1 pinch"
          "2 cups"
          "1 cup")))
      (make-ingredient "oatmeal" "2 servings")]
    [else "Unknown recipe"]))

(serve
  (stir-saucepan
    (add-ingredient
      (make-ingredient "sliced granny smith apple" "1 apple")
      (add-ingredient
        (make-ingredient "cinnamon" "0.25 tsp")
        (add-ingredient
          (make-ingredient "milk" "1 splash")
          (add-ingredient
            (make-ingredient "maple syrup" "1 tbsp")
            (stir-saucepan
              (uncover-saucepan
                (let-sit 5
                  (cover-saucepan
                    (cook-saucepan 2  ; On low, stir throughout
                      (stir-saucepan
                        (add-ingredient
                          (make-ingredient "butter" "1 tbsp")
                          (cook-saucepan 5  ; On high, stir throughout
                            (stir-saucepan
                              (make-medium-saucepan #false #false 0 0
                                (list
                                  (make-ingredient "salt" "1 pinch")
                                  (make-ingredient "water" "2 cups")
                                  (make-ingredient "rolled oats" "1 cup"))))))))))))))))))
